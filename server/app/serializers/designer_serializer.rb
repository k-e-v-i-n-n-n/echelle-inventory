class DesignerSerializer < ActiveModel::Serializer
  attributes :id, :name, :items
  has_many :items
  has_many :users
end
