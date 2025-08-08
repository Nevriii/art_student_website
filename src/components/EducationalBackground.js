import React, { useEffect } from 'react';

const EducationalBackground = () => {
    useEffect(() => {
        // Initialize AOS if it's available globally
        if (window.AOS) {
        window.AOS.init();
        }
    }, []);

    const educationData = [
        {
        years: "2007-2009",
        school: "St. John Bosco Markina",
        level: "Kinder and Pre-school"
        },
        {
        years: "2009-2015", 
        school: "St. Scholastica Academy Marikina",
        level: "Grade 1 - Grade 6"
        },
        {
        years: "2015-2021",
        school: "Infant Jesus Academy Marikina", 
        level: "Grade 7 - Grade 12"
        },
        {
        years: "2021-Present",
        school: "Mapua University",
        course: "BA Multimedia Arts",
        level: "College"
        }
    ];

    return (
        <section className="section2 bg-light" style={{ marginTop: '-270px' }}>
        <div className="container-fluid">
            <div className="container">
                <h1>&nbsp;</h1>
                <div className="row" style={{ paddingTop: '10px' }}>
                    <div className="col-lg-6">
                    <h1 className="text-center">&nbsp;</h1>
                    <h1 
                        id="education" 
                        className="text-center fontcolor1 font-weight-bolder educational-title"
                        data-aos="zoom-out-left" 
                        data-aos-duration="1000"
                    >
                        <div>EDUCATIONAL</div> 
                        <div>BACKGROUND</div>
                    </h1>
                    </div>
                    <div className="col-lg-6">
                        <table 
                            className="table-borderless w-100 educational-table"
                            data-aos="zoom-out-right" 
                            data-aos-duration="1000"
                        >
                            <tbody>
                                {educationData.map((edu, index) => (
                                    <tr key={index}>
                                        <td className="fontcolor4 educational-years">{edu.years}</td>
                                        <td>
                                            <h5 className="fontcolor4 font1 font-weight-bold mb-1 educational-school">
                                            {edu.school}
                                            </h5>
                                            {edu.course && (
                                            <h6 className="fontcolor4 font1 font-weight-bold mb-1">
                                                {edu.course}
                                            </h6>
                                            )}
                                            <i className="font1 fontcolor4">{edu.level}</i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h1>&nbsp;</h1>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default EducationalBackground;