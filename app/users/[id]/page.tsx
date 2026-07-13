
const Users = async({ params }: { params: Promise<{ id: string }>}) => {
    {
        const { id } = await params;
        return (
            <div className="text-center m-5"> user id is = {id}</div>
        )
    }
}
    export default Users;