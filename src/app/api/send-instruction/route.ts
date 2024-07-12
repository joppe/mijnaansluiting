import { env } from "@/env";
import { getToken } from "@/token/getToken";

export const dynamic = "force-dynamic"; // defaults to auto

const instruction = {
  opdrachtId: "OVP-200123499",
  versienummer: "2.0",
  discipline: "Gas",
  externeReferentie: "string",
  opdrachtgever: "joppeaarts",
  opdrachtnemer: "DSP",
  duoNetbeheerder: "joppeaarts",
  clusterId: "string",
  clustercodeNB: "string",
  levermoment: {
    starttijdstip: "2024-08-01T10:00:00Z",
    eindtijdstip: "2024-08-01T10:00:00Z",
    typeTijdstip: "Wens",
    wensdatumKlant: "2024-08-01T10:00:00Z",
  },
  contactpersoonKlant: {
    aanhef: "string",
    achternaam: "string",
    voorletters: "string",
    tussenvoegsel: "string",
    telefoonnummer: "string",
    mobielnummer: "string",
    emailadres: "string",
  },
  behandelaarNB: {
    aanhef: "string",
    achternaam: "string",
    voorletters: "string",
    tussenvoegsel: "string",
    telefoonnummer: "string",
    mobielnummer: "string",
    emailadres: "string",
  },
  contactArtikel123: {
    aanhef: "string",
    achternaam: "string",
    voorletters: "string",
    tussenvoegsel: "string",
    telefoonnummer: "string",
    mobielnummer: "string",
    emailadres: "string",
  },
  contactMV: {
    aanhef: "string",
    achternaam: "string",
    voorletters: "string",
    tussenvoegsel: "string",
    telefoonnummer: "string",
    mobielnummer: "string",
    emailadres: "string",
  },
  leveradres: {
    aansluiting: {
      lengteAansluiting: 0,
      fysiekeStatus: "In aanleg",
      eanCode: "stringstringstring",
      meter: {
        meternummer: "string",
        verwachteMeterstanden: [
          {
            telwerknummer: 0,
            ondergrens: 0,
            bovengrens: 0,
          },
        ],
        meterretour: true,
      },
      eanPrimair: "stringstringstring",
      aansluitleidingen: [
        {
          bekleding: "Menie",
          materiaal: "PE80 SDR 17.6",
          diameter: "15",
          lengte: 0,
          bewerking: "Nieuw",
          koppeling: {
            koppelingsoort: "T-Stuk",
            bewerking: "Nieuw",
          },
        },
      ],
      aansluitstraat: "string",
      aansluitpakket: "Mantelbuis 63mm",
      aansluitwijze: "Aansluiting Op Hoofdleiding",
      wijzeOplevering: "Slim",
      oudeCapaciteit: "G4",
      nieuweCapaciteit: "G4",
      hoofdkraantype: "Kogelkraan",
      huisdrukregelaartype: "Geen Regelaar Aanwezig",
      tekeningnummerMeteropstelling: "292",
      zakkendeGrondConstructie: "Lus Inpandig",
      hoofdleiding: {
        materiaal: "string",
        netdruk: "30 mbar",
        diameter: "15",
        aanlegjaar: 0,
      },
      afsluiter: {
        nummer: "string",
        afsluiterSoort: "Kogelafsluiter",
        bewerking: "Nieuw",
      },
      mantelbuis: {
        buitendiameter: "10",
        materiaal: "PVC",
        bewerking: "Nieuw",
      },
      koppeling: {
        koppelingsoort: "T-Stuk",
        bewerking: "Nieuw",
      },
      aanboring: {
        aanboringsoort: "Aanboring",
        bewerking: "Nieuw",
      },
      gasstopper: {
        capaciteit: "G4",
      },
      gevelbevestiging: "Tangit",
      gevelpassage: "Onderdoor",
    },
    locatie: {
      adres: {
        postcode: "string",
        straat: "string",
        plaats: "string",
        huisnummer: 99999,
        toevoeging: "string",
        land: "NL",
        omschrijving: "string",
        gemeente: "string",
        gemeentecode: "string",
      },
      gps: {
        gpsCoordinaatNoord: "string",
        gpsCoordinaatOost: "string",
        toelichtingLocatie: "string",
      },
      bag: {
        bagNummer: "string",
        versiedatum: "2024-08-01T10:00:00Z",
      },
      bgt: {
        bgtId: "string",
        versiedatum: "2024-08-01T10:00:00Z",
      },
    },
    isAdresseerbaar: true,
    typeAansluitobject: "(woon)boot",
    bijzonderKenmerkAansluiting: "ETA",
    vervuildeGrond: {
      veiligheidsKlasse: "Basishygiëne",
      vluchtigheid: "Vluchtig",
      busMelding: "Ja",
    },
    isAsbestAanwezig: true,
    aansluitobjectId: "string",
  },
  contractnummer: "string",
  bestelnummer: "string",
  opdrachtregels: [
    {
      bestekcode: "string",
      omschrijving: "string",
      aantal: 1,
      eenheidsprijs: 1,
    },
  ],
  vergunningen: [
    {
      nummer: "string",
      aanvraagdatum: "2024-08-01T10:00:00Z",
    },
  ],
  dspProces: "Aansluiting",
  werkProces: "string",
  opmerking: "string",
  aantalBijstellingen: 0,
  gerelateerdProject: "string",
  werkzaamheden: {
    aansluiting: "Nieuw aanleggen",
    binnenwerk: "Aanleggen",
    meter: "Plaatsen",
    typeAansluiting: "Permanent",
    fysiekeStatus: "In aanleg",
    wijzigenCapaciteit: "Verlagen",
  },
};

export async function GET() {
  const token = await getToken();
  const url = `${env.API_URL}/opdracht`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
    body: JSON.stringify(instruction),
  });

  const data = await response.json();

  if (data.opdrachtId) {
    // success
  }
  return Response.json({ data });
}
