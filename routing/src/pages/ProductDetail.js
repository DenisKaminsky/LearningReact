import { useParams } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();

    return <h1>
        Here is product with id: {params.id}
    </h1>
}

export default ProductDetailPage;