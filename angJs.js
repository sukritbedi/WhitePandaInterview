var app = angular.module("myApp",[]);

app.controller("blockArea", function($scope,$http) {
  $scope.data = [
    {
      "title": "Blog/Article",
      "cost": 500,
      "description": "Typically 400-450 words, an e-book is perfect for your target audience ranging from prospective customers to users"
    },
    {
      "title": "Newsletter/E-mailer",
      "cost": 1000,
      "description": "Typically 400-450 words, an e-book is perfect for your target audience ranging from prospective customers to users"
    },
    {
      "title": "Whitepaper",
      "cost": 2000,
      "description": "Typically 400-450 words, an e-book is perfect for your target audience ranging from prospective customers to users"
    },
    {
      "title": "e-book",
      "cost": 1000,
      "description": "Typically 400-450 words, an e-book is perfect for your target audience ranging from prospective customers to users"
    },
    {
      "title": "Report/Guide",
      "cost": 1000,
      "description": "Typically 400-450 words, an e-book is perfect for your target audience ranging from prospective customers to users"
    },
    {
      "title": "Product Description",
      "cost": 500,
      "description": "Typically 400-450 words, an e-book is perfect for your target audience ranging from prospective customers to users"
    },
    {
      "title": "Website Content",
      "cost": 1000,
      "description": "Typically 400-450 words, an e-book is perfect for your target audience ranging from prospective customers to users"
    },
    {
      "title": "Video Script",
      "cost": 1000,
      "description": "Typically 400-450 words, an e-book is perfect for your target audience ranging from prospective customers to users"
    },
    {
      "title": "Company Profile / Brocure",
      "cost": 2000,
      "description": "Typically 400-450 words, an e-book is perfect for your target audience ranging from prospective customers to users"
    },
    {
      "title": "Press Release",
      "cost": 2000,
      "description": "Typically 400-450 words, an e-book is perfect for your target audience ranging from prospective customers to users"
    }
  ];
  console.log($scope.data);
})
