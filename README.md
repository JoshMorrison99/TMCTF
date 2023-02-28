## Portfolio CTF Writeup

**Description**<br/>
Portfolio is an easy machine where initial access involves leveraging either a NoSQL injection vulnerability or performing response manipulation to get access to an admin panel. The admin panel has a private SSH key that is password protected. You can use ssh2john to crack the password and SSH into the machine as user steve. The privilege escalation involves exploiting a SUID bit set on bash.
            
**Port Scan**<br/>
Port scan reveals that ports 22 and 80 are open. Port 80 is a website that is redirecting to http://portfolio.tm. We can confirm that the website is redirecting to http://portfolio.tm by entering the IP in the browser.
![portfolio1](https://user-images.githubusercontent.com/25315255/221939234-38826169-71df-4981-9813-e2781b5bdb01.png)

          
**Host File**<br/>
We will need to edit our /etc/hosts file. Type "vim /etc/hosts" and add the IP with the host name.<br/>
![portfolio2](https://user-images.githubusercontent.com/25315255/221939327-bba591cd-52e4-4e70-9cc8-9944abaee3d9.png)
            
            
**Webpage**<br/>
![portfolio3](https://user-images.githubusercontent.com/25315255/221939405-4208ffd5-54b1-4a59-a252-032c8aa6126f.png)<br/>

**Directory Fuzzing**<br/>
After fuzzing directories, we see /admin directory is returning a 200 status code.<br/>
![portfolio4](https://user-images.githubusercontent.com/25315255/221939519-3bafabd4-f75c-44cd-80d3-69c6b70e2c18.png)<br/>

**Admin Panel**<br/>
The admin panel is password protected. We can bypass this through either NoSQL injection or response manipulation.<br/>
![portfolio5](https://user-images.githubusercontent.com/25315255/221939670-67f6c883-8f8e-4cce-98dd-bfd1f9056149.png)<br/>


**Bypass 1: NoSQL Injection**<br/>
We can capture the request and change the password parameter.<br/>
![portfolio6](https://user-images.githubusercontent.com/25315255/221939815-e395e40e-bc3e-482a-9ade-932b8392f448.png)<br/>

**Bypass 2: Response Manipulation**<br/>
We can capture the request and ask Burp suite for the response.<br/>
![portfolio7](https://user-images.githubusercontent.com/25315255/221939900-8c051138-f78d-47d0-ba9e-7355df634fa9.png)<br/>
![portfolio8](https://user-images.githubusercontent.com/25315255/221939970-b6fa5ead-3d7b-46cf-96c7-b79d9782cdb6.png)<br/>
![portfolio9](https://user-images.githubusercontent.com/25315255/221939988-cd4be4ed-5cb4-45b2-bd0b-f1cb51244908.png)<br/>

**SSH Key**<br/>
We are redirected to a directory containing an SSH key.<br/>
![portfolio10](https://user-images.githubusercontent.com/25315255/221940088-c691766c-5b36-4635-9438-a73e723b728e.png)<br/>

**SSH Attempt**<br/>
We can copy and paste the ssh key into a file and try sshing into the machine as the user steve, but unfortunatly the ssh key is password protected.<br/>
![portfolio11](https://user-images.githubusercontent.com/25315255/221940180-31930bc4-a617-4ebf-84d4-0e53556cad3e.png)<br/>

**Cracking SSH**<br/>
We can use the tool ssh2john to convert our ssh key into a hash that can be cracked using john. Note: you will also need to change the ssh keys privileges to chmod 600.<br/>
![portfolio12](https://user-images.githubusercontent.com/25315255/221940277-d030be5b-83cd-4c42-ac16-2b33417cf70f.png)<br/>

**Privilege Escalation**
We can search for all SUID file with this command: "". A SUID of interest is /bin/bash. With this knowledge, we can use https://gtfobins.github.io/ to see how to escalate privileges.<br/>
![portfolio13](https://user-images.githubusercontent.com/25315255/221940375-f15fe653-b58e-4ac3-b618-b4d75076383c.png)<br/>

**Root**<br/>
Command bash -p will give us root.<br/>
![portfolio14](https://user-images.githubusercontent.com/25315255/221940473-4821e86f-eff7-4927-922c-d9f76ae81413.png)<br/>
