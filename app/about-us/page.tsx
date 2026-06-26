import { PageHero } from '@/features/shared/components/page-hero';
import Image from 'next/image';
import { Blockquote } from '@/features/shared/components/blockquote';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="About Us"
        description="Discover our history, mission, and commitment to service"
      />

      <section className="py-20 bg-background max-w-5xl mx-auto">
        <div
          className={'flex flex-col md:flex-row items-center justify-center'}
        >
          <div className="container mx-auto px-4 basis-full md:basis-[65%]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                A help to those who need it
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 3xl">
                The Congregation Of The Handmaids Of The Holy Child Jesus
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Congregation of the Handmaids of the Holy Child Jesus is an
                international Congregation of Sisters, founded by Mother Mary
                Charles Magdalen, a religious Sister of Charity who came to
                Nigeria in 1923.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our Mission as Sisters is in fidelity to the Gospel values and
                the charism of our Foundress, to commit ourselves to the
                transformation of lives through their prophetic witness of vowed
                life, community living, participatory leadership and apostolic
                ministry with a special option for the poor, women and children.
              </p>
            </div>
          </div>
          <div className={'flex flex-col space-y-3 basis-full md:basis-[30%]'}>
            <Image
              src={'/motherFoundress.jpg'}
              width={200}
              height={200}
              alt={'founder-image'}
              className={'w-[250px] h-[300px] object-cover rounded-xl'}
            />
            <p
              className={
                'text-muted-foreground leading-relaxed text-xl font-semibold'
              }
            >
              Foundress
            </p>
            <p className={'text-muted-foreground leading-relaxed'}>
              Mother Mary Charles Magdalen
            </p>
          </div>
        </div>
        <div className={'space-y-1 mt-16'}>
          <p className={'text-center '}>
            The model and patronage of our Religious consecration is the Blessed
            Virgin Mary who first declared:
          </p>
          <Blockquote
            className={'text-center mt-0'}
            text={
              'I am the Handmaid of the Lord, be it done unto me according to your word.'
            }
          />
          <p className={'text-center'}> (Luke 1:38)</p>
        </div>
      </section>
    </div>
  );
}
