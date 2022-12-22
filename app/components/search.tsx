

export default function Search() {

    return <div>
        <div className="flex justify-betweens relative rounded-xl border-2 hover:border-blue-600">
            <input placeholder="חפש.." className="p-3 rounded-xl outline-none ml-5" dir="rtl"/>
            <div className="material-icons absolute left-2 mt-3 mr-2">search</div>
        </div>

    </div>
}