class DesignerSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :items
  has_many :users
end
