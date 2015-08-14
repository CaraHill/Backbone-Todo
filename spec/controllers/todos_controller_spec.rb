require 'rails_helper'

RSpec.describe TodosController, type: :controller do
  before do
    @todo = Todo.create(description: 'Go to the store to get milk and eggs.')
  end

  describe 'Get #index' do
    it 'returns a successful 200 response' do
      get :index, format: :json
      expect(response).to be_success
    end
    it 'returns all of the todos' do
      get :index, format: :json
      expect(Todo.all[0]).to eq(@todo)
    end
  end
end
