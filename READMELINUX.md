uname -a : the system name

ifconfig : for ip address

///////////// services //////////////////////////////////////////////////

// check for services
service -l

///////////////////////////////// processes ////////////////////////////////
// top processes
top : list the top processes and cpu usage

// list all the process
ps

// check the cpu usage of a process
ps aux | grep processName

////////////////////// disk ///////////////////////////////////////////////

// check the size of a directory
du -sh nameOfDirector

// free disk command
df -ah : list of all the file systems

///////////////////////////// network ////////////////////////////////////////

// looking for all the networking happening
sudo netstat -tulpn

///////////////////////////////////////////////////////// filesystem directories //////////

/ (root directory)
/bin for user executables
/sbin for system executables
/etc for system configuration files
/lib for libraries
/dev for device files
/proc for process information
/sys for system information
/var for variable files, such as log files and temporary files
/usr for user-related files and programs
/opt for optional software
/home for user home directories
/boot for bootloader files
/tmp for temporary files
/mnt for temporarily mounted file systems



// to show all folders and the hidden ones as well
ls -a 

/////////////// mounting ///////////////////////////////////////

When you plug in a USB drive into a Linux system, the files on it are not immediately available for you to use or access. You need to use the mount command to tell the operating system to connect the USB drive's file system to a specific directory on your system, known as the mount point.

For example, you can use the command mount /dev/sdb1 /mnt/usbdrive to connect the file system on the first partition of your USB drive(/dev/sdb1) to the directory /mnt/usbdrive. Once the file system is mounted, you can access the files on the USB drive by going to the /mnt/usbdrive directory as if they were stored on your local system.


It's important to unmount the file system properly before physically removing the USB drive using the command:
 -  umount /mnt/usbdrive .
 
  This will make sure that the file system is properly disconnected from the system and any open files on the file system are closed before the drive is removed.