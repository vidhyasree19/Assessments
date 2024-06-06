const users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        contact: {
            email: "john.doe@example.com",
            phone: "123-456-7890",
            address: {
                street: "123 Main St",
                city: "Anytown",
                state: "CA",
                zip: "12345",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/johndoe",
                twitter: "https://twitter.com/johndoe",
                linkedIn: "https://www.linkedin.com/in/johndoe"
            }
        }
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        contact: {
            email: "jane.smith@example.com",
            phone: "987-654-3210",
            address: {
                street: "456 Elm St",
                city: "Othertown",
                state: "NY",
                zip: "54321",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/janesmith",
                twitter: "https://twitter.com/janesmith",
                linkedIn: "https://www.linkedin.com/in/janesmith"
            }
        }
    },
    {
        id: 3,
        firstName: "Robert",
        lastName: "Johnson",
        contact: {
            email: "robert.johnson@example.com",
            phone: "321-654-9870",
            address: {
                street: "789 Oak St",
                city: "Sometown",
                state: "TX",
                zip: "67890",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/robertjohnson",
                twitter: "https://twitter.com/robertjohnson",
                linkedIn: "https://www.linkedin.com/in/robertjohnson"
            }
        }
    },
    {
        id: 4,
        firstName: "Emily",
        lastName: "Davis",
        contact: {
            email: "emily.davis@example.com",
            phone: "654-321-0987",
            address: {
                street: "123 Pine St",
                city: "Anothertown",
                state: "FL",
                zip: "98765",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/emilydavis",
                twitter: "https://twitter.com/emilydavis",
                linkedIn: "https://www.linkedin.com/in/emilydavis"
            }
        }
    },
    {
        id: 5,
        firstName: "Michael",
        lastName: "Brown",
        contact: {
            email: "michael.brown@example.com",
            phone: "456-789-0123",
            address: {
                street: "456 Maple St",
                city: "Mytown",
                state: "IL",
                zip: "11223",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/michaelbrown",
                twitter: "https://twitter.com/michaelbrown",
                linkedIn: "https://www.linkedin.com/in/michaelbrown"
            }
        }
    },
    {
        id: 6,
        firstName: "Sarah",
        lastName: "Miller",
        contact: {
            email: "sarah.miller@example.com",
            phone: "789-012-3456",
            address: {
                street: "789 Birch St",
                city: "Yourtown",
                state: "PA",
                zip: "33445",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/sarahmiller",
                twitter: "https://twitter.com/sarahmiller",
                linkedIn: "https://www.linkedin.com/in/sarahmiller"
            }
        }
    },
    {
        id: 7,
        firstName: "David",
        lastName: "Martinez",
        contact: {
            email: "david.martinez@example.com",
            phone: "012-345-6789",
            address: {
                street: "123 Cedar St",
                city: "Hometown",
                state: "WA",
                zip: "55667",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/davidmartinez",
                twitter: "https://twitter.com/davidmartinez",
                linkedIn: "https://www.linkedin.com/in/davidmartinez"
            }
        }
    },
    {
        id: 8,
        firstName: "Laura",
        lastName: "Garcia",
        contact: {
            email: "laura.garcia@example.com",
            phone: "345-678-9012",
            address: {
                street: "456 Spruce St",
                city: "Thistown",
                state: "OR",
                zip: "77889",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/lauragarcia",
                twitter: "https://twitter.com/lauragarcia",
                linkedIn: "https://www.linkedin.com/in/lauragarcia"
            }
        }
    },
    {
        id: 9,
        firstName: "James",
        lastName: "Taylor",
        contact: {
            email: "james.taylor@example.com",
            phone: "678-901-2345",
            address: {
                street: "789 Poplar St",
                city: "Heretown",
                state: "MI",
                zip: "99001",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/jamestaylor",
                twitter: "https://twitter.com/jamestaylor",
                linkedIn: "https://www.linkedin.com/in/jamestaylor"
            }
        }
    },
    {
        id: 10,
        firstName: "Olivia",
        lastName: "Lee",
        contact: {
            email: "olivia.lee@example.com",
            phone: "901-234-5678",
            address: {
                street: "123 Willow St",
                city: "Theirville",
                state: "AZ",
                zip: "11234",
                country: "USA"
            },
            social: {
                facebook: "https://www.facebook.com/olivialee",
                twitter: "https://twitter.com/olivialee",
                linkedIn: "https://www.linkedin.com/in/olivialee"
            }
        }
    }
];

       
function generateHeaders() {
    const headerRow1 = document.getElementById('headerRow1');
    const headerRow2 = document.getElementById('headerRow2');
    const headerRow3 = document.getElementById('headerRow3');

    headerRow1.innerHTML = `
        <th rowspan="3">ID</th>
        <th rowspan="3">First Name</th>
        <th rowspan="3">Last Name</th>
        <th colspan="10">Contact</th>
        
    `;

  
    headerRow2.innerHTML = `
        <th rowspan='2' >Email</th>
        <th rowspan='2'>Phone</th>
        <th rowspan='1' colspan="5">Address</th>
        <th rowspan='1'colspan="3">Social Media</th>
    `;
    headerRow3.innerHTML = `
        <th>Country</th>
        <th>State</th>
        <th>City</th>
        <th>Street</th>
        <th>Zip</th>
        <th>Facebook</th>
        <th>LinkedIn</th>
        <th>Twitter</th>
    `
}

function generateRows() {
    const userBody = document.getElementById('userBody');
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.contact.email}</td>
            <td>${user.contact.phone}</td>
            <td>${user.contact.address.country}</td>
            <td>${user.contact.address.state}</td>
            <td>${user.contact.address.city}</td>
            <td>${user.contact.address.street}</td>
            <td>${user.contact.address.zip}</td>
            <td><a href="${user.contact.social.facebook}">${user.contact.social.facebook}</a></td>
            <td><a href="${user.contact.social.linkedIn}">${user.contact.social.linkedIn}</td>
            <td><a href="${user.contact.social.twitter}">${user.contact.social.twitter}</td>
        `;
        userBody.appendChild(row);

        
        
    });
}


generateHeaders();
generateRows();