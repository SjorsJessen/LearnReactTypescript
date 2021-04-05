import * as React from "react";
import { RouteComponentProps, Prompt } from "react-router-dom";
import { IProduct, getProduct } from "./ProductsData";
import Product from "./Product";

type Props = RouteComponentProps<{ id: string }>;

interface IState {
    product?: IProduct;
    isAdded: boolean;
    isLoading: boolean;
}

class ProductPage extends React.Component<Props, IState> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            isAdded: false,
            isLoading: true,
        };
    }

    public async componentDidMount() {
        if (this.props.match.params.id) {
            const id: number = parseInt(this.props.match.params.id, 10);
            const product = await getProduct(id);

            if (product !== null) 
                this.setState({ product, isLoading: false });
        }
    }

    private handleAddClick = () => {
        this.setState({ isAdded: true });
    };

    private navAwayMessage = () =>
        "Are you sure you leave without buying this product?";

    public render() {
        const product = this.state.product;

        return (
            <div className="page-container">
                <Prompt when={!this.state.isAdded} message={this.navAwayMessage} />
                {product || this.state.isLoading ?
                    (
                        <Product
                            loading={this.state.isLoading} //Inherited from withLoader HOC
                            product={product}
                            inBasket={this.state.isAdded}
                            onAddToBasket={this.handleAddClick}
                        />
                    ) : (<p>Product not found!</p>)}
            </div>
        );
    }
}

export default ProductPage;