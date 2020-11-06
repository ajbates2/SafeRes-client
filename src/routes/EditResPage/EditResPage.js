import EditRes from "../../components/EditRes/EditRes";
import Header from "../../components/Header/Header";
import Store from "../../Store";

export default function EditResPage(props) {

    return (
        <>
            <Header />
            <EditRes resi={Store} resId={props.match.params.id} />
        </>
    )
}