require 'rails_helper'

RSpec.describe Todo, type: :model do

  before do
    @todo = Todo.create(description: "Go to the store to get milk and eggs.")
  end

  it 'has a description' do
    expect(@todo.description).to eq("Go to the store to get milk and eggs.")
  end

  Todo.destroy_all
end
