// Require Dependancies
const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;





// server listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);