import { mock } from '../../../mock';

class Assets {
  get = () =>{
    const arr = [];
    return new Promise(
      (resolve, reject) => {
        const subscription = mock.subscribe(val => { 
          arr.push(val);
        })
          setTimeout(
              () => {
                subscription.unsubscribe()
                  resolve(arr);
              }, 1000);
      }
    );
  }
}

export default new Assets();
