import Card from '../components/CoursesIndex/Card';

function CoursesIndex(){
    const courses =[
        {
            title: 'Course1',
            content:
            "Content Content Content Content Content Content Content "
        },
        {
            title: 'Course2',
            content:
            "Content Content Content Content Content Content Content "
        },
    ]



    return (
        <>
            <h1>Liste des cours</h1>
            {courses.map((course)=>(
                <Card title={course.title} content={course.content}/>
             ))}
        </>
    );
}       
export default CoursesIndex;