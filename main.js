const style = document.createElement('style');
style.innerHTML = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .injected__container {
      width: calc(47%);
      margin: 0px 0px 3%;
      padding: 0.8rem;
      display: flex;
      justify-content: center;
    }

    .injected__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-grow: 1;
      padding: 1rem;
      box-shadow: 1px 1px 5px 5px #f1f1f1;
      border-radius: 10px;
      background: #fff;
    }

    .injected__text {
      font-family: KIKOPro,Gotham,Heebo,OpenSans,Helvetica,Arial,Sans-Serif;
      font-weight: 500;
      font-size: 2.2rem;
      line-height: 2.2rem;
      text-align: center;
    }

    @media screen and (max-width: 1200px) {
      .injected__container {
        width: 62%;
      }
    }

    @media screen and (max-width: 1025px) {
      .injected__container {
        height: 541px;
      }
    }

    @media screen and (max-width: 768px) {
      .injected__container {
        width: 100%;
        margin: 0px 1% 3%;
      }
      .injected__wrapper {
        width: 100%;
      }
    }

    @media screen and (max-width: 450px) {
      .injected__text {
        font-size: 1.8rem;
        line-height: 1.8rem;
      }
    }
`;
document.head.appendChild(style);

const injectedDiv = document.createElement('div');
injectedDiv.classList.add('injected__container');

const contentWrapper = document.createElement('div');
contentWrapper.classList.add('injected__wrapper');
contentWrapper.innerHTML = `<p class='injected__text'>This block is added to the page using Vanilla JS</p>`;

injectedDiv.appendChild(contentWrapper);

const productsList = document.getElementsByClassName('products items');
document.body.insertAdjacentElement;

const productsListItems = productsList[0].children;
productsListItems[3].insertAdjacentElement('afterend', injectedDiv);
