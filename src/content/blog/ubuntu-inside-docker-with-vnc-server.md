---
title: "Run Ubuntu GUI inside Docker + VNC server setup"
description: 'Run a ubuntu docker container & setup vnc server to a port for displaying & interacting through the screen in GUI .'
pubDate: 'Dec 26 2024'
# updatedDate: 'Jan 3 2024'
heroImage: '/blog-placeholder-2.jpg'
---

Run a ubuntu docker container & setup vnc server to a port for displaying & interacting through the screen in GUI .


Let’s start with the “which image to use ?”, I have used `ubuntu:16.04` in the guide.

#### Creating a `Dockerfile` with ubuntu-16.04

```
FROM ubuntu:16.04 
# This is setting up the base image as ubuntu.
```
```
ENV DEBIAN_FRONTEND=noninteractive
```

As, we don’t want to press the `y` key during the build process. This will insure that we don’t need to interact with the docker build process.

#### Install SSH server
Setting up SSH will give us idea that, in case you fail to connect via VNC server, you can connect via ssh.
```
RUN apt-get update && apt-get install -y openssh-server sudo
```

**Setting up the users and password to connect,** I’m not going in much detail for this step because this will become off topic. I have added code comments that will give you some idea.

```
# Create the SSH directory and configure permissions
RUN mkdir /var/run/sshd

# Add a new user 'dockeruser' and set a password
RUN useradd -m -s /bin/bash dockeruser && \
    echo 'dockeruser:YOUR_PASSWORD_HERE' | chpasswd

# Optional: Add the user to the sudoers to allow administrative actions
RUN echo 'dockeruser ALL=(ALL) NOPASSWD: ALL' > /etc/sudoers.d/dockeruser && \
    chmod 0440 /etc/sudoers.d/dockeruser

# Enable password authentication in the SSH configuration
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config

# Optional: Disable root login via SSH
RUN echo "PermitRootLogin no" >> /etc/ssh/sshd_config

CMD ["/usr/sbin/sshd", "-D"] # Run the SSH server
```

#### Install `Ubuntu-Desktop`
```
RUN sudo apt install -y ubuntu-desktop
```
**Ubuntu-Desktop:** ‘Hero of the show’ the main thing to run the GUI interface.
This will be going to convert our terminal looking ubuntu server to colorful beautiful GUI look.

Wooh! This is the hero of the show but don’t forget who is real hero. Yes you guess it right it’s `linux`.

#### Installing `tightvncserver`
RUN sudo apt install -y tightvncserver
Tightvncserver : Just like SSH (which allow you to remotely connect to a machice via terminal) on a specific port, ofcourse you need to be in the same network.

Similarly, vnc-server will also allow you to connect to the machine port (by default 5901), just like ssh here you also connect via the host & username. But the only thing different here is, you need a vncviewer to view the remote host’s screen (more on this later).

#### Exposing the PORTS
EXPOSE 22   # Expose the SSH 
EXPOSE 5901 # Expose the SSH port
As our container is completely isolated from the outer environment, we need to establish the connection between our container and our main machine. We are exposing port 22 for SSH connection and port 5901 for the VNC connection.

Complete Dockerfile :

```
# Use the Ubuntu 16:04 base image
FROM ubuntu:16.04

# Avoid prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Update packages and install SSH server
RUN apt-get update && \
    apt-get install -y openssh-server sudo

# Update packages and install SSH server
RUN apt-get update && \
    apt install -y ubuntu-desktop 

RUN sudo apt install -y \ 
        tightvncserver \
        gnome-panel \ 
        gnome-settings-daemon \ 
        metacity \ 
        nautilus \ 
        gnome-terminal \ 
        nano


# Create the SSH directory and configure permissions
RUN mkdir /var/run/sshd

# Add a new user 'dockeruser' and set a password
RUN useradd -m -s /bin/bash dockeruser && \
    echo 'dockeruser:YOUR_PASSWORD_HERE' | chpasswd

# Optional: Add the user to the sudoers to allow administrative actions
RUN echo 'dockeruser ALL=(ALL) NOPASSWD: ALL' > /etc/sudoers.d/dockeruser && \
    chmod 0440 /etc/sudoers.d/dockeruser

# Enable password authentication in the SSH configuration
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config

# Optional: Disable root login via SSH
RUN echo "PermitRootLogin no" >> /etc/ssh/sshd_config

# Expose the SSH port
EXPOSE 22
EXPOSE 1
EXPOSE 5901

# Run the SSH server    
CMD ["/usr/sbin/sshd", "-D"]
```

#### Now, Building the image.
```
docker build -t ubuntu-ssh . 
```
Run the above command to build the docker image with the base image. This will be going to do all the stuff we above read and give you a new image (this is going to take time based on your internet).

- `ubuntu-ssh` the name of the image we are building
- `.`  location of the Dockerfile (in our case current location)
You can run docker images` to see the image build. 

#### Run Container with our image
```
docker run -d \
          -p 2222:22 -p 5901:5901 \ 
          --name ubuntu-ssh-container ubuntu-ssh
```

As our image is ready, now we need to run the image, in order to make that container.

```
docker run`: run the image
-d`: running the container in dettached mode
-p 2222:22`: Mapping local port 2222 to container’s port 22, for the ssh.
-p 5901:5901`: mapping local port 5901 to container’s port 5901, for vnc server.
```
After running the container, the output will be somthing like this:

**[ IMPORTANT ]: Now, you should be able to connect via ssh to the container.**

#### SSH connection with container
```
ssh dockeruser@localhost -p 2222 
```
Connecting via a classic ssh command,
host: localhost, username: dockuser, PORT 2222

**Why PORT 2222 ? Becasuse we have mapped the container’s port 22 to our local 2222.**

Default password is `YOUR_PASSWORD_HERE` , if have not changed it in the Dockerfile.


So, now you can connect to the container. You can explore that all the packages we have written in the dockerfile are installed, and also the ubunut-desktop.

#### Setup VNC Server
```
dockeruser@27c0689c322f ~ vncserver :1
```
Running vncserver :1 will start a vnc session for the display, Display :1 corresponds to TCP port 5901 .

After running this command for the first time you will be asked to setup vncserver password. This password will be very important. I suggest to use the password as the same as ssh password.

It will also ask for view-only password, make it `n` for convenience.


Now, a new file xstartup at location ‘ home/dockeruser/.vnc/’ will be created, we have to change the default configurations of that file “i got this from stackoverflow”. You can use nano/vim editor to edit the file.
```
# /bin/sh

export XKL_XMODMAP_DISABLE=1
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS

[ -x /etc/vnc/xstartup  ] && exec /etc/vnc/xstartup
[ -r $HOME/ .Xresources ] && xrdb $HOME/ .Xresources
xsetroot -solid grey

vncconfig -iconic &
gnome-panel &
gnome-settings-daemon &
metacity &
nautilus &
gnome-terminal &
```
Now, you have edited the file `home/dockeruser/.vnc/xstartup`, we will restart the vncserver.
So, First stopping the vnc session by running vncserver -kill :1

```
dockeruser@27c0689c322f ~ vncserver -kill :1 
>>> Killing Xtightvnc process ID 1315 # Expected output
```
Starting the vnc session session again via vncserver :1

```
dockeruser@27c0689c322f ~ vncserver :1
# EXPECTED OUTPUT
>> New 'X' desktop is 27c0689c322f:1
>> Starting applications specified in /home/dockeruser/.vnc/xstartup
>> Log file is /home/dockeruser/.vnc/27c0689c322f:1.log
```
**So, VNC setup is completed. Now our vncserver is ready to connect at port 5901** (which is exposed to connect via any vncviwer),

hostname: `localhost:1` (notice? :1 is the display session)
password: `YOUR_PASSWORD_HERE`(if you havn’t changed).

Let’s download the vncviewer to connect and see the screen. I am using `RealVNC`, because this is famous and free. You can use any other viewer (the steps should be pretty similar).



Enter the `host` then `password` & connect. Finally! If everything is ok you should see the screen like:


Output of RealVNC Viewer
Thanks for reading this, i hope you will learn something new. You can follow & subscribe me. An Upvote will be very helpful in making me motivated to write more like this.



