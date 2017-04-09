"""
All basic info and required modules
"""
from setuptools import setup

setup(name='checkit api',
      version='1.0.0',
      description='CheckIt universal APIs',
      author='Ranjeet Singh',
      author_email='sranjeet748@gmail.com',
      url='http://www.python.org/sigs/distutils-sig/',
      install_requires=['Django>=1.10', 'PyMySQL',
                        'djangorestframework', 'pygments', 'corsheaders'],
      )
