VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = "precise32"
    config.vm.box_url = "http://files.vagrantup.com/precise32.box"

    config.vm.network :forwarded_port, guest: 3000, host: 30000   # rails
    config.vm.network :forwarded_port, guest: 4000, host: 40000   # jekyll

    config.vm.provision :shell, :path => "provision_packages.sh"
    config.vm.provision :shell, :path => "provision-install-rvm.sh",  :args => "stable"
    config.vm.provision :shell, :path => "provision-install-ruby.sh", :args => "2.1.2 jekyl"
end
