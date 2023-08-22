import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory }) => {
    const router = useRouter();

    const removeSearchTerm = () => {
        router.push({
            pathname: "/products",
        });
    };

    const selectCategory = (e, category) => {
        e.preventDefault();
        removeSearchTerm();
        updateProductCategory(category);
        // router.push('/')
    };
    return (
        <>
            <ul className="categories">
                <li onClick={(e) => selectCategory(e, "")}>
                    <a>All</a>
                </li>
                <li onClick={(e) => selectCategory(e, "ConnectivitySolutions")}>
                    <a>Connectivity Solutions</a>
                </li>
                <li onClick={(e) => selectCategory(e, "AVCables")}>
                    <a>AV Cables</a>
                </li>
                <li onClick={(e) => selectCategory(e, "Mounting")}>
                    <a>Mounting Solutions</a>
                </li>
                <li onClick={(e) => selectCategory(e, "Solutions")}>
                    <a>Projection Solutions</a>
                </li>
                <li onClick={(e) => selectCategory(e, "Projector")}>
                    <a>Projector Ceiling Mounts</a>
                </li>
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct);
