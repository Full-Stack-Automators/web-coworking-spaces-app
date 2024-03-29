require("linqjs")
import Layout from "../../components/layout";
import Board from "../../components/board";
import Check from "../../components/check";
import Locations from "../data.json";

const Index = ({ location }) =>
    <Layout>
        <section className="container text-white bg-dark py-3">
            <div className="row">
                <img src={'img/' + location.image} className="col-sm-6" alt={location.name} />
                {getDetails(location)}
            </div>
            {getTable(location)}
        </section>
    </Layout>;

const getTable = (location) =>
    <table className="table table-bordered table-sm table-striped bg-secondary text-dark">
        <thead>
            <tr>
                <th scope="col">
                    Room
                </th>
                <th scope="col">
                    Monthly Rate
                </th>
                <th scope="col">
                    Seats
                </th>
                <th scope="col">
                    Private Washroom
                </th>
                <th scope="col">
                    Phone
                </th>
                <th scope="col">
                    Windows
                </th>
                <th scope="col">
                    Corner
                </th>
            </tr>
        </thead>
        <tbody>            
            {location.rooms.map((room) => (
                <tr id={room.description.replace(/\s/g, '')} key="{room.description}">
                    <th id="room" scope="row">
                        {room.description}
                    </th>
                    <td id="monthly-rate">
                        {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(room.monthlyRate)}
                    </td>
                    <td id="seats">
                        {room.seats}
                    </td>
                    <td id="private-facilities">
                        {room.privateFacilities ? <Check /> : ( <></> )}
                    </td>
                    <td id="phone">
                        {room.phoneIncluded ? <Check /> : ( <></> )}
                    </td>
                    <td id="windows">
                        {room.windows ? <Check /> : ( <></> )}
                    </td>
                    <td id="corner">
                        {room.corner ? <Check /> : ( <></> )}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>;

const getDetails = (location) =>
    <div className="col-sm-6">
        <h4 className="display-4 text-white">
            {location.name}
        </h4>
        <p className="text-muted">
            {location.mailingAddress}
        </p>
        <div className="my-2">
            <Board location={location} />
        </div>
    </div>;

export const getStaticProps = async (context) =>
{
    const { id } = context.params;
    return {
        props: {
            location: [...Locations]
            .where(l => l.id === id)
            .first()
        }
    };
}

export async function getStaticPaths() {
    return {
      paths: [...Locations]
        .select(l => '/locations/' + l.id),
      fallback: false
    }
}

export default Index