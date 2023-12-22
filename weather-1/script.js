const getUsers = async () => {
    try {
      const data = await fetch('./hourly.json').then(response => response.json());
      data.forEach(data => {
      console.log(data[0].time)
      });
    } catch (error) {
      console.log(error)
    }
  }
  
  getUsers();
