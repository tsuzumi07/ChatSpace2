# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## chat-space DB設計
##usersテーブル
|Column|Type|Options|
|------|----|--------|
|name|string|null:false, index: true|
|email|reference|null:false, unique:true|

#Association
has_many :massages
has_many :group_users
has_many :groups through,group_users


##massageテーブル
|column|type|options|
|------|----|-------|
|body|text|
|image|string|
|group|reference|null:false, foreign_key:true
|user|reference|null:false,foreign_key:true

#Association
belongs_to :group
belongs_to :user
has_many :groups_users



##groupsテーブル
|column|type|options|
|------|----|-------|
|name|string|null:false,unique:true|


#Association
has_many :users,through: groups_users
has_many :massages
has_many :groups_users

##groups_usersテーブル
|column|type|options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

#Association
belongs_to :group
belongs_to :user
