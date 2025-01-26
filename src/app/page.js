import Image from "next/image";
import Link from 'next/link'

export default async function Home() {
  const data = await fetch(
    'https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/22313c56-5acf-41c7-a5fd-dc5dc72b3851/download/routes.json',
    {
      headers: {
        'Cache-Control': 'no-cache' // bez tego zapamięta stare dane z api
      }
    }
  )
  const routes = await data.json()

  const currentDateFunc = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const currentDate = currentDateFunc();

  let routeTypes = [
    {
      title: 'Linie tramwajowe',
      name: 'TRAM',
      routes: routes[currentDate].routes.filter(route => route.routeType == 'TRAM')
    },
    {
      title: 'Linie autobusowe',
      name: 'BUS',
      routes: routes[currentDate].routes.filter(route => route.routeType == 'BUS')
    },
    {
      title: 'Linie obsługiwane przez tramwaje wodne',
      name: 'FERRY',
      routes: routes[currentDate].routes.filter(route => route.routeType == 'FERRY')
    },
  ]
  routeTypes = routeTypes.filter(routeType => routeType.routes.length > 0)

  return (
    <>
      <main>

        <section className="section py-10">

          {routeTypes.map((routeType, index) => (
            <div key={routeType.name} className={index === routeTypes.length - 1 ? 'row' : 'row mb-10'}>
              <div className="container mx-auto">
                <div className="col">
                  <div className="m-routes">
                    <h3 className="text-4xl mb-5">{routeType.title}</h3>
                    <ul className="grid grid-cols-11 gap-5">
                      {routeType.routes.map(route =>
                        <li className="text-xl text-center bg-red-500 hover:bg-red-400 text-white" key={route.routeId}><Link className="block p-2" href={`/route/${route.routeId}`}>{route.routeShortName}</Link></li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
          )}

        </section>

        <section className="section">
          <div className="container mx-auto">
            <div className="col">
              <div className="info-status-date">
                <h5>Rozkład na dzień: {currentDateFunc()}</h5>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
