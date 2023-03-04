class User < ApplicationRecord
    validates :username, presence:true 
    validates :username, uniqueness: true
    has_secure_password
    has_many :items
    has_many :designers, through: :items
end
