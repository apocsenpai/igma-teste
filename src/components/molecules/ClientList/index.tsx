import { clientImageList } from "@/utils"

const ClientList = () => {
    return <div className="grid grid-cols-2 lg:grid-cols-3 xl:gap-x-14">
        {clientImageList.map(item => <img key={item.component} src={item.component} alt={item.alt} />)}
    </div>
}

export default ClientList