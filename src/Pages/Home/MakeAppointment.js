import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center mt-24'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='textxl text-primary font-bold'>Appointment</h3>
                <h2 className='text3xl text-white py-2'>Make an Appointment Today</h2>
                <p className='text-white pb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus hic possimus perferendis dolore. Exercitationem facilis sit perspiciatis neque voluptas ipsam eius sed saepe similique maxime illo quibusdam impedit nihil, iusto maiores harum laboriosam optio laudantium reprehenderit et quod earum.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;