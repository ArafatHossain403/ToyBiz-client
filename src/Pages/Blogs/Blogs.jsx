const Blogs = () => {
  return (
    <div>
      <h1 className="text-center text-cyan-600 font-bold text-3xl">Blog page</h1>
      <div className="text-center">
        <div className="my-5">
          <h2 className="font-bold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p>
            <span className="text-red-600">Answer: </span>
            An access token is a piece of code that contains information about
            the user, time frames, groups, and permissions which move from a
            server to a user’s device. Access tokens give permission to a
            particular application to access an API. <br />A refresh token is a
            special token used to unlock more access tokens. Access tokens are
            only valid for a short period of time. When they expire, a refresh
            token can give the user continued access without having to sign in
            again. Access tokens work by communicating between the server and a
            device. Refresh tokens improve the user experience without
            compromising any security and don’t give users additional access
            beyond the original scope. Let’s say you’re constantly asked to sign
            in each time you want to use Netflix to watch TV.
          </p>
        </div>
        <div className="my-5">
          <h2 className="font-bold" >Compare SQL and NoSQL databases?</h2>
          <p>
            <span className="text-red-600">Answer: </span>
            SQL, which stands for “Structured Query Language,” is the
            programming language that’s been widely used in managing data in
            relational database management systems. <br /> NoSQL is a
            non-relational database, meaning it allows different structures than
            a SQL database (not rows and columns) and more flexibility to use a
            format that best fits the data.
          </p>
        </div>
        <div className="my-5">
          <h2 className="font-bold">What is express js? What is Nest JS?</h2>
          <p>
            <span className="text-red-600">Answer: </span>
            Express is a Node.js web application framework that provides a wide
            range of functionality for constructing web and mobile applications.
            It is a layer built on top of Node that aids in the management of
            servers and routes. <br />
          </p>
        </div>
        <div className="my-5">
          <h2 className="font-bold">What is MongoDB aggregate and how does it work ?</h2>
          <p>
            <span className="text-red-600">Answer:</span>
            Aggregations operations process data records and return computed
            results. Aggregation operations group values from multiple documents
            together, and can perform a variety of operations on the grouped
            data to return a single result. In SQL count 8 and with group by is
            an equivalent of MongoDB aggregation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
