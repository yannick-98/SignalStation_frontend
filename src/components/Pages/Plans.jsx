import React from 'react'
import PlanCard from '../Others/PlanCard'

const Plans = () => {
    return (
        <div className='pt-12'>
            <h1 className='text-center text-3xl font-bold'>Choose your <span className='text-orange-600'>plan</span></h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-12 py-12'>
                <PlanCard
                    name={'Free'}
                    description={"Our free plan provides basic access to trading signals with a limited number of signals each month, all at no cost."}
                    price={0}
                    textColor="text-cyan-400"
                    borderColor="border-cyan-400 shadow-cyan-400" />

                <PlanCard name={'Basic'}
                    description={"For 9 euros a month, the Basic plan enhances your experience with a broader limit on monthly trading signals."}
                    price={14}
                    textColor="text-yellow-400"
                    borderColor="border-yellow-400 shadow-yellow-400" />

                <PlanCard name={'Pro'}
                    description={"Priced at 14 euros per month, the Pro plan is for serious traders."}
                    price={19}
                    textColor="text-violet-500"
                    borderColor="border-violet-500 shadow-violet-500" />
            </div>

        </div>
    )
}

export default Plans
