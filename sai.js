try {
    let result = JSON.parse("invalid JSON");
     throw('');
  } catch (error) {
    console.log("bharath caught:", error.message);
  }