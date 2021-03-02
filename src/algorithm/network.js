
class Neuron {
  input = [];
  output = 0;

  weights = [];
  bias = 0;

  public calcOutput = () => {
  }
}


class Network {
  ninputs = 4;
  nlayers = 2;
  nodes_per_layer = 6;
  noutputs = 2;

  weights = [];
  biases = [];


  getRandom = () => {
    return Math.random();
  }


  randomizeWeights = () => {
    if (this.nlayers < 2) {
        Console.error("I need at least 2 nodes, one for input and one for output");
        return;
    }

    // build the weight matrices by random
    for(let n=0; n < this.nlayers; n++) {
      let x_size = this.nodes_per_layer;
      if (n == 0) {
        x_size = this.ninputs;
      }

      let y_size = this.nodes_per_layer;
      if (n == this.nlayers-1) {
        y_size = this.noutputs;
      }

      for (let y=0; y < y_size; y++) {
        for (let x=0; x < x_size; x++) {
          this.weights[n][y][x] = this.getRandom();
        }
        this.biases[n][y] = this.getRandom();
      }
    }
  }

  //recursive function to get output
  calcOutput = (input, layer = 0) => {
    let op = this.weights[layer] * input + this.biases[layer];
    // todo: function around op
    if (layer == this.nlayers-1) {
      return op;
    }
    return this.calcOutput(op, layer+1);
  }

  //todo training model
  train = (input, output) => {
    let op = this.calcOutput(input);

  }




  // W * v_in + v_bias = v_out
  // W =  [
  //   {n0_w1, n0_w1, ... n0_wn},
  //   {n1_w1, n1_w1, ... n1_wn},
  //            ...
  //   {nn_w1, nn_w1, ... nn_wn},
  // ]

}


//export default Network;
