telegram.MainButton.setText("Save").onClick(() => {
    const data = { product: 'Tomatoes', harvestDate: '2025-01-10' };
    telegram.sendData(JSON.stringify(data));
  });