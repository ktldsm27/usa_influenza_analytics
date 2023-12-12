function makePrediction() {
    
    const loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'block';
    
    const inputValue = document.getElementById('predict').value;
   
    fetch('../csv/predictiondata.csv')
        .then(response => response.text())
        .then(csvData => {
            const lines = csvData.split('\n').map(line => line.split(','));
            const limitedLines = lines.slice(1, 100);

            const features = limitedLines.map(entry => parseFloat(entry[5])); 
            const labels = limitedLines.map(entry => parseFloat(entry[6]));   

            const featuresTensor = tf.tensor2d(features, [features.length, 1]);
            const labelsTensor = tf.tensor2d(labels, [labels.length, 1]);

            const model = tf.sequential();
            model.add(tf.layers.dense({ units: 10, inputShape: [1], activation: 'relu' }));
            model.add(tf.layers.dense({ units: 20, activation: 'relu' }));
            model.add(tf.layers.dense({ units: 10, activation: 'relu' }));
            model.add(tf.layers.dense({ units: 1 }));

            model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

            model.fit(featuresTensor, labelsTensor, { epochs: 100 }).then(() => {

                const newFeature = [parseFloat(inputValue)];
                const newFeatureTensor = tf.tensor2d(newFeature, [newFeature.length, 1]);
                const predictionsTensor = model.predict(newFeatureTensor);
                const prediction = Math.round(predictionsTensor.dataSync()[0]);

                const predictionsDiv = document.getElementById('predictions');
                predictionsDiv.innerHTML = '<h5>Predicted ILI Cases:</h5>';
                predictionsDiv.innerHTML += '<p style="color:red">' + prediction + '</p>';

                const mae = tf.metrics.meanAbsoluteError(labelsTensor, model.predict(featuresTensor)).dataSync()[0];
                const mse = tf.metrics.meanSquaredError(labelsTensor, model.predict(featuresTensor)).dataSync()[0];
                const rmse = Math.sqrt(mse);
                const ssRes = tf.sum(tf.square(tf.sub(labelsTensor, model.predict(featuresTensor)))).dataSync()[0];
                const ssTot = tf.sum(tf.square(tf.sub(labelsTensor, tf.mean(labelsTensor)))).dataSync()[0];
                const r2 = 1 - ssRes / ssTot;
                loadingDiv.style.display = 'none';

                const metricsDiv = document.getElementById('metrics');
                metricsDiv.innerHTML = '<h5>Model Metrics:</h5>';
                metricsDiv.innerHTML += '<p>Mean Absolute Error (MAE): ' + mae + '</p>';
                metricsDiv.innerHTML += '<p>Mean Squared Error (MSE): ' + mse + '</p>';
                metricsDiv.innerHTML += '<p>Root Mean Squared Error (RMSE): ' + rmse + '</p>';
                metricsDiv.innerHTML += '<p>R-squared (R2): ' + r2 + '</p>';
            });
        });
}
