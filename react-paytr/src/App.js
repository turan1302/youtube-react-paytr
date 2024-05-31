import {Component} from "react";
import RestClient from "./RestAPI/RestClient";
import AppUrl from "./RestAPI/AppUrl";
import parse from 'html-react-parser';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            paymentForm: ''
        }
    }

    componentDidMount() {
        this.getPaymentForm();
    }


    getPaymentForm = () => {
        let basket = [
            ["Macbook Pro M2", 50000, 1],
            ["Laptop Standı", 1000, 1]
        ];

        RestClient.postRequest(AppUrl.payment, {
            basketData: basket
        }).then((res) => {
            const result = res.data;

            if (result.success===true){
                this.setState({
                    isLoading: false,
                    paymentForm: result.view
                })
            }

        }).catch((err) => {
            console.log(err);

            alert("Bir Hata Oluştu. Lütfen Daha Sonra Tekrar Deneyiniz");
        });
    }

    render() {
        const {isLoading, paymentForm} = this.state;

        if (isLoading === true) {
            return (
                <div>
                    Yükleniyor
                </div>
            )
        }

        return (
            <div>
                {(paymentForm !== '') ? (
                    <div>
                        {parse(paymentForm)}
                    </div>
                ) : (
                    <div>
                        Payment Form Getirilemedi
                    </div>
                )}
            </div>
        )
    }
}

export default App;
