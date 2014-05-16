Vagrant.configure("2") do |config|
  # ubuntu 64-bit (change to desired)
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"


  # Set private address for VM
  # config.vm.network "private_network", ip: "192.168.56.102"
  config.vm.network "forwarded_port", guest: 3131, host: 3131

  # Customize synced folders below
  config.vm.synced_folder "./public", "/home/vagrant/public"

  # Customizations to VM
  config.vm.provider :virtualbox do |vb|
    # Use VBoxManage to customize the VM. For example to change memory:
    vb.customize ["modifyvm", :id, "--memory", "1024"]
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
  end

  
  config.vm.provision :shell, :inline => "sudo apt-get update -y"
  config.vm.provision :shell, :inline => "sudo apt-get install -y build-essential --no-install-recommends"

  # Git
  config.vm.provision :shell, :inline => "sudo apt-get install -y git --no-install-recommends"

  # Node
  config.vm.provision :chef_solo do |chef|
    chef.add_recipe "nodejs"
    chef.json = {
      "nodejs" => {
        # Set the version needed.
        "version" => "0.10.28",
        "install_method" => "binary",
        "check_sha" => false
      }
    }
  end

  # Grunt
  config.vm.provision :shell, :inline => "npm install -g grunt-cli"

  # Bower
  config.vm.provision :shell, :inline => "npm install -g bower"
end
