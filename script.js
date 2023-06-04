
function getMenu() {
      fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
          const menuDiv = document.createElement('div');
          menuDiv.setAttribute('id', 'menu');
          data.forEach(item => {
          const cards = document.createElement('div');
          cards.setAttribute('id', 'cards');
          const pics = document.createElement('img');
          pics.src = item.imgSrc;
          cards.appendChild(pics);
          const itemDetailDiv = document.createElement('div');
          itemDetailDiv.setAttribute('id', 'itemDetailDiv');
          const menuItem = document.createElement('p');
          menuItem.setAttribute('id', 'itemDetail');
          menuItem.textContent = item.name + ' - $' + item.price;
          itemDetailDiv.appendChild(menuItem);
          cards.appendChild(itemDetailDiv);

          menuDiv.appendChild(cards);
          });
//          const box = document.getElementsByClassName("dynamic-display");
          document.body.appendChild(menuDiv);
      })
      .catch(error => {
          console.log('Error fetching menu:', error);
      });
  }


  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const order = {
          burgers: ['Burger 1', 'Burger 2', 'Burger 3']
        };
        resolve(order);
      }, 2500);
    });
  }


  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: false
        };
        resolve(orderStatus);
      }, 1500);
    });
  }


  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {
          order_status: true,
          paid: true
        };
        resolve(orderStatus);
      }, 1000);
    });
  }


  function thankYou() {
    alert('Thank you for eating with us today!');
  }


  document.getElementById('menuButton').addEventListener('click', getMenu);
  document.getElementById('orderButton').addEventListener('click', () => {
    takeOrder()
      .then(order => {
        console.log('Order:', order);
        return orderPrep();
      })
      .then(orderStatus => {
        console.log('Order status:', orderStatus);
        return payOrder();
      })
      .then(orderStatus => {
        console.log('Order status:', orderStatus);
        if (orderStatus.paid) {
          thankYou();
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });
  document.getElementById('payButton').addEventListener('click', payOrder);
  