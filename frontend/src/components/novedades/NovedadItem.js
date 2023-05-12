import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <main className="holder">
            <div className="novedades">
                <div className="novedad">
                    <img src={imagen} />
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                </div>
            </div>
        </main>
    );
}

export default NovedadItem;
