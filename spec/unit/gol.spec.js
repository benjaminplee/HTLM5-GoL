describe 'Game Of Life'
	it 'should have a LIFE constant'
	  GoL.should.have_prop 'LIFE'
	end
	
	it 'should have an EMPTY constant'
	  GoL.should.have_prop 'EMPTY'
	end

  describe 'Matrix'  
  	describe 'constructor'
  	  before_each
  	    SIZE = 5
  	    matrix = new GoL.Matrix(SIZE)
  	  end
  	
  	  it 'should build size matrix'
  	    matrix.size.should.eql SIZE
  	  end
  	  
  	  it 'should build out a empty matrix'
  	    for(var x = 0; x < matrix.size; x++) {
  	    	for(var y = 0; y < matrix.size; y++) {
  	    		matrix.at(x, y).should.eql GoL.EMPTY
  	    	}
  	    }
  	  end
  	end
  	
  	describe 'spawn'
  	  it 'should create life at the given point'
  	  	matrix = new GoL.Matrix(3)
  	  
  	    matrix.spawn(1, 1)
  	    
  	    matrix.at(1, 1).should.eql GoL.LIFE
  	  end
  	end
  	
  	describe 'kill'
  	  it 'should remove life at the given point'
  	    matrix = new GoL.Matrix(3)
  	    matrix.spawn(1, 1)
  	    
  	    matrix.kill(1, 1)
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	end
  	
  	describe 'count_neighbors'
  	  before_each
  	    matrix = new GoL.Matrix(4)
  	  end
  	  
  	  it 'should return 0 on an empty board'
  	    matrix.count_neighbors(1, 1).should.eql 0
  	  end
  	  
  	  it 'should not count the actual location'
  	    matrix.spawn(1, 2)
  	    
  	    matrix.count_neighbors(1, 2).should.eql 0
  	  end
  	  
  	  it 'should count direct neighbors (up down left and right)'
  	    matrix.spawn(1, 0)
  	    matrix.spawn(0, 1)
  	    matrix.spawn(2, 1)
  	    matrix.spawn(1, 2)
  	    
  	    matrix.count_neighbors(1, 1).should.eql 4
  	  end
  	  
  	  it 'should count diagonal neighbors'
  	    matrix.spawn(0, 0)
  	    matrix.spawn(2, 0)
  	    matrix.spawn(0, 2)
  	    matrix.spawn(2, 2)
  	    
  	    matrix.count_neighbors(1, 1).should.eql 4
  	  end
  	  
  	  it 'should handle minimum edges gracefully'
  	    matrix.spawn(3, 0)
  	    matrix.spawn(0, 3)
  	    matrix.spawn(3, 3)
  	    
  	    matrix.count_neighbors(0, 0).should.eql 3 	    
  	  end
  	  
  	  it 'should handle max edges gracefully'
  	    matrix.spawn(3, 0)
  	    matrix.spawn(0, 3)
  	    matrix.spawn(0, 0)
  	    
  	    matrix.count_neighbors(3, 3).should.eql 3 	    
  	  end
  	end
  	
  	describe 'ticktock'
  	  before_each
				matrix = new GoL.Matrix(3)
  	  end
  	  
  	  it 'should leave an empty matrix blank'
  	    matrix.ticktock()
  	    
  	    for(var x = 0; x < matrix.size; x++) {
  	    	for(var y = 0; y < matrix.size; y++) {
  	    		matrix.at(x, y).should.eql GoL.EMPTY
  	    	}
  	    }
  	  end
  	  
  	  it 'should kill spaces without neighbors'
  	    matrix.spawn(1, 1)
  	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should kill spaces with a single neighbor'
  	    matrix.spawn(1, 1)
  	    matrix.spawn(0, 0)
  	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should leave spaces with 2 neighbors'
  	    matrix.spawn(1, 1)
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.LIFE
  	  end
  	  
  	  it 'should leave spaces with 3 neighbors'
  	    matrix.spawn(1, 1)
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.LIFE
  	  end
  	  
  	  it 'should kill spaces with 4 neighbors'
  	    matrix.spawn(1, 1)
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	  	matrix.spawn(1, 0)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should kill spaces with 5 neighbors'
  	    matrix.spawn(1, 1)
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	  	matrix.spawn(1, 0)
  	  	matrix.spawn(1, 2)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should kill spaces with 6 neighbors'
  	    matrix.spawn(1, 1)
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	  	matrix.spawn(1, 0)
  	  	matrix.spawn(1, 2)
  	  	matrix.spawn(2, 0)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should kill spaces with 7 neighbors'
  	    matrix.spawn(1, 1)
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	  	matrix.spawn(1, 0)
  	  	matrix.spawn(1, 2)
  	  	matrix.spawn(2, 0)
  	  	matrix.spawn(2, 1)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should kill spaces with 8 neighbors'
  	    matrix.spawn(1, 1)
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	  	matrix.spawn(1, 0)
  	  	matrix.spawn(1, 2)
  	  	matrix.spawn(2, 0)
  	  	matrix.spawn(2, 1)
  	  	matrix.spawn(2, 2)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should spawn new life if an empty space has 3 neighbors'
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.LIFE
  	  end
  	  
  	  it 'should do nothing to empty spaces with 2 neighbors'
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	    	  
  	  it 'should do nothing to empty spaces with 1 neighbor'
  	    matrix.spawn(0, 0)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should do nothing to empty spaces with 4 neighbors'
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	  	matrix.spawn(1, 0)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should do nothing to empty spaces with 5 neighbors'
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	  	matrix.spawn(1, 0)
  	  	matrix.spawn(1, 2)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should do nothing to empty spaces with 6 neighbors'
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	  	matrix.spawn(1, 0)
  	  	matrix.spawn(1, 2)
  	  	matrix.spawn(2, 0)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should do nothing to empty spaces with 7 neighbors'
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	  	matrix.spawn(1, 0)
  	  	matrix.spawn(1, 2)
  	  	matrix.spawn(2, 0)
  	  	matrix.spawn(2, 1)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should do nothing to empty spaces with 8 neighbors'
  	    matrix.spawn(0, 0)
  	    matrix.spawn(0, 1)
  	  	matrix.spawn(0, 2)
  	  	matrix.spawn(1, 0)
  	  	matrix.spawn(1, 2)
  	  	matrix.spawn(2, 0)
  	  	matrix.spawn(2, 1)
  	  	matrix.spawn(2, 2)
  	      	    
  	    matrix.ticktock()
  	    
  	    matrix.at(1, 1).should.eql GoL.EMPTY
  	  end
  	  
  	  it 'should return list of all new squares with LIFE'
  	    matrix.spawn(0, 0)
  	    matrix.spawn(1, 0)
  	    matrix.spawn(2, 0)
  	    
  	    var results = matrix.ticktock()
  	    
  	    results.spawned.length.should.eql 6
  	    results.spawned[0].x.should.eql 0
  	    results.spawned[0].y.should.eql 1
  	    results.spawned[1].x.should.eql 0
  	    results.spawned[1].y.should.eql 2
  	    results.spawned[2].x.should.eql 1
  	    results.spawned[2].y.should.eql 1
  	    results.spawned[3].x.should.eql 1
  	    results.spawned[3].y.should.eql 2
  	    results.spawned[4].x.should.eql 2
  	    results.spawned[4].y.should.eql 1
  	    results.spawned[5].x.should.eql 2
  	    results.spawned[5].y.should.eql 2
  	  end
  	  
  	  it 'should return list of all newly EMPTY squares'
  	    matrix.spawn(1, 1)
  	    
  	    var results = matrix.ticktock()
  	    
  	    results.killed.length.should.eql 1
  	    results.killed[0].x.should.eql 1
  	    results.killed[0].y.should.eql 1
  	  end
  	end
  end
end