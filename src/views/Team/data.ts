import reda from '@assets/team/reda.png'
import kk from '@assets/team/kk.svg'
import julien from '@assets/team/julien.svg'
import martin from '@assets/team/martin.svg'
import michael from '@assets/team/michael.svg'
import tarek from '@assets/team/tarek.svg'
import popo from '@assets/team/me.svg'
import coco from '@assets/team/coco.svg'
import hubertus from '@assets/team/hubertus.svg'
import manu from '@assets/team/manu.svg'
import allan from '@assets/team/allan.svg'

export type Team = {
    image: string
    name: string
    job: string
}

export const team: Team[] = [
    {
        image: reda,
        name: 'Réda Berrehili',
        job: 'Co-Founder & CEO',
    },
    {
        image: kk,
        name: 'Kheireddine Kamal',
        job: 'Co-Founder & COO',
    },
    {
        image: julien,
        name: 'Julien Guyomard',
        job: 'Co-Founder & CTO',
    },
    {
        image: martin,
        name: 'Martin Rosenbaum',
        job: 'Chief Customers & Investors relations',
    },
    {
        image: michael,
        name: 'Michael Lévy',
        job: 'Chief Financial Officer',
    },
    {
        image: tarek,
        name: 'Tarek Awwad',
        job: 'Chief Blockchain Architect',
    },
    {
        image: popo,
        name: 'Arnaud Polette',
        job: 'Senior Lead Developer Front',
    },
    {
        image: coco,
        name: 'Corentin Fouré',
        job: 'Senior iOS Engineer',
    },
    {
        image: hubertus,
        name: 'Hubertus von Heyden',
        job: 'Head of Community',
    },
    {
        image: manu,
        name: 'Emanuele Manconi',
        job: 'Product Manager',
    },
    {
        image: allan,
        name: 'Allan Floury',
        job: 'Lead Product & UX Designer',
    },
]
