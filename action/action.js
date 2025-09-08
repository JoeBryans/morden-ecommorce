import prisma from "../lib/db";

export async function Getproducts(search, page) {
  const name = new RegExp(search, "i");
  const pageItems = 2;
  const pages = parseInt(page);

  const skip = pageItems * (pages - 1) || 0;
  try {
    const Allproduct = await prisma.product.aggregate({
      _count: { name: true },
    });
    const product = await prisma.product.findMany({
      skip: skip,
      take: pageItems,
      where: { name: name },
    });
    const totalItems = Allproduct._count.name;

    return { totalItems, data: product };
  } catch (error) {
    return;
  }
}
export async function GetUsers(search, page) {
  const name = new RegExp(search, "i");
  const pageItems = 2;
  const pages = parseInt(page);

  const skip = pageItems * (pages - 1) || 0;
  try {
    const Allusers = await prisma.user.aggregate({
      _count: { name: true },
    });
    const users = await prisma.user.findMany({
      skip: skip,
      take: pageItems,
      where: { name: name },
    });
    const totalUsers = Allusers._count.name;
    console.log("totalUsers", users);

    return { totalUsers, data: users };
  } catch (error) {
    return;
  }
}

export async function getOrder(search, page) {
  const id = new RegExp(search, "i");
  const pageItems = 3;
  const pages = parseInt(page);
  try {
    const totalItems = await prisma.order.aggregate({
      _count: { id: true },
    });
    const orders = await prisma.order.findMany({
      where: {
        id: id,
      },
      include: {
        users: {
          select: {
            name: true,
            email: true,
            phone: true,
            image: true,
          },
        },
      },
      skip: pageItems * (pages - 1) || 0,
      take: pageItems,
    });

    console.log("order", orders);

    return { totalItems, data: orders };
  } catch (error) {
    return;
  }
}
export async function getUserOrders(id) {
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: id,
      },
    });

    console.log("usersOrders", orders);

    return orders;
  } catch (error) {
    return;
  }
}

export async function Phones() {
  try {
    const product = await prisma.product.findMany({
      where: {
        category: "phone",
      },
    });

    return product;
  } catch (error) {
    return;
  }
}
export async function Laptop() {
  try {
    const product = await prisma.product.findMany({
      where: {
        category: "computer",
      },
    });
    return product;
  } catch (error) {
    return error;
  }
}

export async function HomeAndOffice() {
  try {
    const product = await prisma.product.findMany({
      where: {
        category: "home&office",
      },
    });
    return product;
  } catch (error) {
    return error;
  }
}

export async function Fashion() {
  try {
    const product = await prisma.product.findMany({
      where: {
        category: "fashion",
      },
    });
    return product;
  } catch (error) {
    return error;
  }
}
export async function Grocery() {
  try {
    const product = await prisma.product.findMany({
      where: {
        category: "groccey",
      },
    });
    return product;
  } catch (error) {
    return error;
  }
}
export async function Electronics() {
  try {
    const product = await prisma.product.findMany({
      where: {
        category: "electronics",
      },
    });
    return product;
  } catch (error) {
    return error;
  }
}
export async function Others() {
  try {
    const product = await prisma.product.findMany({
      where: {
        category: "other",
      },
    });
    return product;
  } catch (error) {
    return error;
  }
}
export async function Sports() {
  try {
    const product = await prisma.product.findMany({
      where: {
        category: "sport",
      },
      sort: {
        createdAt: "desc",
      },
    });
    return product;
  } catch (error) {
    return;
  }
}
export async function Beauty() {
  try {
    const product = await prisma.product.findMany({
      where: {
        category: "beauty",
      },
    });
    return product;
  } catch (error) {
    return;
  }
}
export async function Latest() {
  try {
    const product = await prisma.product.findMany({
      orderBy: { createAt: "asc" }, 
    });
    console.log("latest", product);
    
    return product;
  } catch (error) {
    return error;
  }
}
