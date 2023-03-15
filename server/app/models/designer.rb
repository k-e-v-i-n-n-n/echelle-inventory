class Designer < ApplicationRecord
    
    validates :name, 
    :uniqueness => {:message => "of designer already exists, please select from dropdown"},
    :presence => true
 

    has_many :items
    has_many :users, -> {distinct}, through: :items
end
