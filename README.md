## Synopsis

Vagrant Box configuration for simple node.js development environment: **node.js**, **npm**, **grunt**, **bower** (by default, installed on a standard **Ubuntu (x64)**).


## Installation

### Check the prerequisites
Make sure you have the following installed:

* VirtualBox (<http://www.virtualbox.org>)
* Vagrant (<http://www.vagrantup.com>)


### Clone the configuration
Substitute _"you-name-that-box"_ below with an appropriate name for your VM, adding the appropriate directory.

	git clone https://github.com/zztimur/vagrant-node-grunt-bower.git you-name-that-box

### Start
Switch to your brand new box and start it.

	cd ./you-name-that-box
	vagrant up


### Test
Shortly you will have dev environment set. To test it, ssh to VM and run a sample script:

	vagrant ssh
	cd public
	node server.js
Open <http://localhost:3131> in your web browser. The page should load and greet you with "Hello World!".


## Reference

Attributes for chefs' cookbook:

	nodejs['install_method'] = source or package
	nodejs['version'] - release version of node to install
	nodejs['src_url'] - download location for node source tarball
	nodejs['dir'] - location where node will be installed, default /usr/local
	nodejs['npm'] - version of npm to install
	nodejs['npm_src_url'] - download location for npm source tarball
	nodejs['check_sha'] - test for valid sha_sum, default: true

Original repository **"nodejs-cookbook"** is available on GitHub: <https://github.com/mdxp/nodejs-cookbook>.
There's information about the latest updates, authors, license and full manual.


## License

Licensed under the GNU GENERAL PUBLIC LICENSE v3 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at <http://www.gnu.org/licenses/gpl.html>.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.