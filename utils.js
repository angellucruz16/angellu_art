
  // Currency format
  const formatCurrency = (price) => {
    return new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "US",
      minimumFractionDigits: 2,
    }).format(price);
   };

