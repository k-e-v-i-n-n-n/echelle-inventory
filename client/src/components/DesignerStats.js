

const DesignerStats = ({designer, globalDesigners}) => {


    const {id} = designer

    let designerFilter = globalDesigners?.find((designer) => designer.id == id)
    let userArray = designerFilter?.users
    let userCount = userArray?.length

    return(
        <>
        {userCount > 1 ? <p className="total-users"> There are {userCount} showrooms representing this designer </p> : <p className="total-users"> There is {userCount} showroom representing this designer </p> }
        </>
    )
}

export default DesignerStats