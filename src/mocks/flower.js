const flowers = [
  {
    title: `Red`,
    color: `red`,
    id: `red`,
    sizes: [
      {
        size: `S`,    
        stock: true,        
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },

      },
      {
        size: `M`,  
        stock: true,          
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/red/M.png`, 
      },
      {
        size: `L`,    
        stock: false,        
        price: {
          oldPrice: 5600,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/red/L.png`,

      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
  {
    title: `Pink`,
    color: `pink`,
    id: `pink`,
    sizes: [
      {
        size: `S`,   
        stock: true,          
        price: {
          oldPrice: 2100,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/pink/S.png`,
      },
      {
        size: `M`,     
        stock: true,        
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/pink/M.png`,
      },
      {
        size: `L`,
        stock: true,             
        price: {
          oldPrice: 5200,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/pink/L.png`,
      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
  {
    title: `Cream`,
    color: `cream`,
    id: `cream`,
    sizes: [
      {
        size: `S`,   
        stock: true,               
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/cream/S.png`,
      },
      {
        size: `M`,  
        stock: true,                
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/cream/M.png`,
      },
      {
        size: `L`,    
        stock: true,              
        price: {
          oldPrice: 5500,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/cream/L.png`,
      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
  {
    title: `Orange`,
    color: `orange`,
    id: `orange`,
    sizes: [
      {
        size: `S`,   
        stock: true,               
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/orange/S.png`,
      },
      {
        size: `M`,    
        stock: true,              
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/orange/M.png`, 
      },
      {
        size: `L`,  
        stock: true,                
        price: {
          oldPrice: 5500,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/orange/L.png`,

      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
  {
    title: `Yellow`,
    color: `yellow`,
    id: `yellow`,
    sizes: [
      {
        size: `S`,  
        stock: true,                
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/yellow/S.png`,
      },
      {
        size: `M`,
        stock: true,                  
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/yellow/M.png`,
      },
      {
        size: `L`, 
        stock: true,                 
        price: {
          oldPrice: 5500,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/yellow/L.png`,
      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
  {
    title: `Green`,
    color: `green`,
    id: `green`,
    sizes: [
      {
        size: `S`,
        stock: true,                  
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/green/S.png`,
      },
      {
        size: `M`,            
        stock: true,      
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/green/M.png`,
      },
      {
        size: `L`,
        stock: true,                  
        price: {
          oldPrice: 5500,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/green/L.png`,
      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
  {
    title: `Blue`,
    color: `blue`,
    id: `blue`,
    sizes: [
      {
        size: `S`,  
        stock: true,                
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/blue/S.png`,
      },
      {
        size: `M`,   
        stock: true,               
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/blue/M.png`,
      },
      {
        size: `L`, 
        stock: true,                 
        price: {
          oldPrice: 5500,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/blue/L.png`,
      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
  {
    title: `Purple`,
    color: `purple`,
    id: `purple`,
    sizes: [
      {
        size: `S`,   
        stock: true,               
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/purple/S.png`,
      },
      {
        size: `M`,
        stock: true,                  
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/purple/M.png`,
      },
      {
        size: `L`,  
        stock: true,                
        price: {
          oldPrice: 5500,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/purple/L.png`,
      },
    ],
    description : `!Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
  {
    title: `Candy-bar`,
    color: `candy-bar`,
    id: `candy-bar`,
    sizes: [
      {
        size: `S`, 
        stock: true,                 
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/candy-bar/S.png`,
      },
      {
        size: `M`,  
        stock: true,                
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/candy-bar/M.png`,
      },
      {
        size: `L`,    
        stock: true,              
        price: {
          oldPrice: 5500,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/candy-bar/L.png`,
      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
  {
    title: `Multi`,
    color: `hot-pink`,
    id: `multi-1`,
    sizes: [
      {
        size: `S`,  
        stock: true,                
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/multi/S.png`,
      },
      {
        size: `M`,    
        stock: true,              
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/multi/M.png`,
      },
      {
        size: `L`,  
        stock: true,                
        price: {
          oldPrice: 5500,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/multi/L.png`,
      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
        {
    title: `Multi`,
    color: `hot-pink`,
    id: `multi-2`,
    sizes: [
      {
        size: `S`,  
        stock: true,                
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/multi-2/S.png`,
      },
      {
        size: `M`,    
        stock: true,              
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/multi-2/M.png`,
      },
      {
        size: `L`,  
        stock: true,                
        price: {
          oldPrice: 5500,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/multi-2/L.png`,
      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
  {
    title: `Black Pack`,
    color: `black-pack`,
    id: `black-pack`,
    sizes: [
      {
        size: `S`,  
        stock: true,                
        price: {
          oldPrice: 2300,
          currentPrice: 2000,
        },
        urlPicture: `assets/img/flowers/black-pack/S.png`,
      },
      {
        size: `M`, 
        stock: true,                 
        price: {
          oldPrice: 3400,
          currentPrice: 3000,
        },
        urlPicture: `assets/img/flowers/black-pack/M.png`,
      },
      {
        size: `L`,
        stock: true,          
        price: {
          oldPrice: 5500,
          currentPrice: 5000,
        },
        urlPicture: `assets/img/flowers/black-pack/L.png`,
      },
    ],
    description : `Настоящий универсал, букет такого оттенка приятно удивит и порадует каждого.`,
  },
];




export {flowers};