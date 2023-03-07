class Designer < ApplicationRecord
    validates :name, uniqueness: true, presence: true
    has_many :items
    has_many :users, through: :items
end
