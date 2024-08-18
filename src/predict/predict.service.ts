import { Injectable } from "@nestjs/common";
import * as tf from "@tensorflow/tfjs";
@Injectable()
export class PredictService {
  private model: tf.LayersModel;

  async loadModel() {
    // For TensorFlow.js model
    this.model = await tf.loadLayersModel(
      "file://path/to/tfjs_model/model.json"
    );

    // For TensorFlow Node.js (if using SavedModel)
    // this.model = await tf.node.loadSavedModel('path/to/saved_model');
  }

  async predict(input: number[]): Promise<number[]> {
    const tensor = tf.tensor2d([input], [1, input.length]);
    const prediction = this.model.predict(tensor) as tf.Tensor;
    const result = await prediction.data();
    return Array.from(result);
  }
}
