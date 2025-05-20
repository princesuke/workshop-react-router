import Card from "../components/Card";
import { useParams } from "react-router";
import { langs } from "../i18n/langs";

export default function Home() {
    const {lang} = useParams();
    return <Card>
        <div>
            <img className="mb-6" src="https://feelman.info/html/anri/img/img1.jpg" />
            <p className="text-2xl font-light text-center">Cup Of Coffee On The Window Sill</p>
            <p className="text-center font-thin text-sm pt-2">from Home</p>
        </div>
        <div className="text-center">
            <p>{lang}</p>
            <p>{langs[lang].welcome}</p>
            <p>{langs[lang].login}</p>
            <p>{langs[lang].logout}</p>
        </div>
    </Card>
}